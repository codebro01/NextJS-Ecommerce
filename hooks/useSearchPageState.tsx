import {create} from 'zustand';



type UseSearchPageState = {
    open: boolean, 
    toggleOpen(): void,
}


export const useSearchPageState = create<UseSearchPageState>()(
    (set) => ({
            open: false, 
            toggleOpen: () => {
                return set((state: {open: boolean}) => ({
                    open: state.open === false ? true : false
                }))
            }
        })
)
// function naming<T>(arg: T): T {
//     console.log(arg)
//        return arg
// }

// console.log(naming('hello'))