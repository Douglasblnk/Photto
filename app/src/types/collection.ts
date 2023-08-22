export interface CollectionBody {
  collectionName: string
  collectionDate: string
}

export interface CollectionsParams {
  search: string
  orderBy: 'ASC' | 'DESC'
  sortBy: 'collectionName' | 'collectionDate'
}

export interface CollectionsResponse {
  id: string
  collectionName: string
  collectionDate: string
}

interface Equipment {
  type: string
  name: string
}

export interface CollectionResponse {
  id: string
  username?: string
  collectionDate: string
  collectionName: string
  description?: string
  equipments?: Equipment[]
  participants?: string[]
  place?: string
}