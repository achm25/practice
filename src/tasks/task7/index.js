// memo function
// https://bigfrontend.dev/problem/implement-general-memoization-function

function memo(func, key = (...args) => args.join("_")) {
    const store = Map();

    return function(...args){

        const storeKey = key(...args)

        if(store.has(storeKey)){
            return store.get(storeKey)
        }

        const res = func.call(this,...args)
        store.set(storeKey, res);
        return res;

    }


}