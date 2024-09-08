export interface ICategory {
  id?: number
  title: string
  description: string | null
  percentage: number | null
}


export interface ICategoryCreationAttributes {
  title: string
  description: string | null
  percentage: number | null
}