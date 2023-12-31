type Mods  = Record<string,boolean | string>

    export function classNames(cls:string,mods:Mods,addtional:string[]):string{
        return [
            cls,
            ...addtional,
            ...Object.entries(mods)
                .filter(([cls,value])=>Boolean(value))
                .map(([cls])=>cls)
        ].join(' ')
}

classNames('remove-btn',{hovered:true,selectable:true,red:false},['pdg'])