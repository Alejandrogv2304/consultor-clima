export type SearchType = {
    city:string
    country:string
}

export type Country={
    code: number
    name:string
}

export type Wetaher={
    name:string
    main : {
       temp: number 
       temp_max:number
       temp_min:number
    }
}