# Tutorial: Counter

Welcome to the `co-share` Tutorial, where we will build a shared counter and display it using `react`.
Above, you can see a local simulation, but this library is meant for **networked communication** using WebSocket or WebRTC.

-----

## Store

Let's begin by writing the **Store**.

```typescript
export class CounterStore extends Store
```

We create the class `CounterStore` and extend it from the **Store**-class.  
As the counter must persist in a state, we will use `zustand/vanilla` to persist the current number.
Therefore we add the attribute state to the `CounterStore`.

```typescript
    public state: StoreApi<{ counter: number }>
```

This state has to be initialized, so let's do that inside the constructor.

```typescript
   constructor(value: number) {
        super()
        this.state = create(() => ({ counter: value }))
    }
```

We expect to receive the current `value` when creating a store.
The `value` needs to come from an existing store, which we want to subscribe to.
This logic is inside the `subscriber` attribute, which all **Stores** have implemented.
So let's create such a **Subscriber** ...

```typescript
Subscriber.create(CounterStore, (connection, accept, deny) => accept(this.state.getState().counter))
```

... and assign it to the `CounterStore`.

```typescript
public subscriber: Subscriber<CounterStore, [number]> =
    Subscriber.create(...
```

The function passed to the **Subscriber** creation is called when a store wants to subscribe to this **Store**.
The function decides whether the subscription is accepted or denied by using the respective callbacks.
When accepting a subscription, the Store has to pass the values required to recreate the Store on the subscriber side.

That's it. Now the stores are synchronized.
But they do not change ...

We implement an **Action** to change the counter, which is the same concept as a _Remote Method Invocation_.
**Actions** can be executed locally and published to a remote store.
**Actions** can have parameters, which are the same for local and remote execution.

We will create an `increase` function with no parameters.

```typescript
increase = Action.create(this, "incr", (origin) => {
```

The public **Action** identifier will be `incr`. The `origin` is a link to the Store that has issued this invocation.

The increase function should simply add 1 to the current counter value.

```typescript
this.state.setState({
    counter: this.state.getState().counter + 1,
})
```

Now the counter is changed, but only locally. We have not yet published this **Action** to any other store.

This is done by calling `publishTo` on the **Action**.

```typescript
this.increase.publishTo(origin == null ? { to: "all" } : { to: "all-except-one", except: origin })
```

If the `origin` is null, the **Action** was invoked locally, and thus no origin is present.  
The `increase` **Action** is now an attribute of the `CounterStore`, which will look like this.

```typescript
increase = Action.create(this, "incr", (origin) => {
    this.increase.publishTo(origin == null ? { to: "all" } : { to: "all-except-one", except: origin })
    this.state.setState({
        counter: this.state.getState().counter + 1,
    })
})
```

Lastly, we need to implement some abstract methods which we can leave empty but are interesting callbacks.

```typescript
public onUnlink(link: StoreLink): void {}
public onLink(link: StoreLink): void {}
```

`onUnlink` and `onLink` are invoked when a link to this Store is established or destroyed.
However, for the simple counter, these two functions can be left empty.

Now we are done with the Store. The complete code looks like this ([`counter.ts`](https://github.com/cocoss-org/co-share/blob/master/examples/stores/counter.ts)).

```typescript
export class CounterStore extends Store {
    public subscriber: Subscriber<CounterStore, [number]> = Subscriber.create(
        CounterStore,
        (connection, accept, deny) => accept(this.state.getState().counter)
    )

    public state: StoreApi<{ counter: number }>

    public onUnlink(link: StoreLink): void {}

    public onLink(link: StoreLink): void {}

    constructor(value: number) {
        super()
        this.state = create(() => ({ counter: value }))
    }

    increase = Action.create(this, "incr", (origin) => {
        this.increase.publishTo(origin == null ? { to: "all" } : { to: "all-except-one", except: origin })
        this.state.setState({
            counter: this.state.getState().counter + 1,
        })
    })
}
```

-----

## View and Interaction

Let's move on and show see how we can interact and show the Store.

We will use react to show the current value and invoke the `increase` **Action** via a button.

We assume you are a little familiar with `react`.

The only `react` specific code `co-share` offers is the `useStoreSubscription` hook.  
This hook allows you to specify the path to the **Store** you want to subscribe to, the time to wait after retrying the subscription when something fails, and how to create the requested Store from the returned parameters.

```typescript
const store = useStoreSubscription("counter", 1000, (value: number) => new CounterStore(value))
```

We can now access the Store inside the react code freely.
So let's use the state from `zustand`.

```typescript
const useStoreState = useMemo(
    () =>
        create<{
            counter: number
        }>(store.state),
    [store]
)
```

Since we had to use `zustand/vanilla` in the Store to be executable on NodeJS, we now have to turn the `StoreAPI` into a hook using the `create` function.  
We memorize this value, so it's not recreated too often.

Now we have retrieved our `useStoreState` hook and can retrieve the `counter` from it.

```typescript
const { counter } = useStoreState()
```

The `counter` value will now be updated every time the counter changes, resulting in a rerender of the component.

The last step is to render this value ...

```typescript
    <div className="p-3 d-flex flex-row align-items-center">
        <h1 className="mx-3">{counter}</h1>
```

... and add a button to increase the counter.
Since we have access to the Store, we can directly call the `increase` **Action**.

```typescript
        <button className="m-1 btn btn-outline-primary" onClick={() => store.increase()}>
            +
        </button>
    </div>
```

That's it, now the Store can be shared and changed from multiple clients, and the changes are reflected on the screen.

The complete code for the `react` page is below or at [`counter.tsx`](https://github.com/cocoss-org/co-share/blob/master/examples/pages/counter.tsx).

```typescript
function CounterExamplePage() {
    const store = useStoreSubscription("counter", 1000, (value: number) => new CounterStore(value))
    const useStoreState = useMemo(
        () =>
            create<{
                counter: number
            }>(store.state),
        [store]
    )

    const { counter } = useStoreState()

    return (
        <div className="p-3 d-flex flex-row align-items-center">
            <h1 className="mx-3">{counter}</h1>
            <button className="m-1 btn btn-outline-primary" onClick={() => store.increase()}>
                +
            </button>
        </div>
    )
}
```

## What's Next?

> That was easy. Can you show me something **more complex**?

Check out the other [**Examples**](https://cocoss-org.github.io/co-share). They increase in complexity.

> Have something to **complain** about or correct?

**write an issue or a PR**

> Want to see the complete code for a *real* **networked** version of the counter using `socketio`?

Check out the [co-share-socketio-counter-example](https://github.com/cocoss-org/co-share-socketio-counter-example)

> Motivated to build an MMORPG / Multiplayer First Person Shooter / ... ?

Well, **go for it**! We recommend to use `co-share`, `co-share-socketio`, `react` and `react-three-fiber`.