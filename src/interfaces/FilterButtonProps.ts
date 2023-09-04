export interface FilterButtonProps{
    key: string,
    name: string,
    isPressed: boolean,
    setFilter: (filter: string)=> void,
}