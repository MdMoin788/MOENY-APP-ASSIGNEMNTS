
export const setData = (key,data)=> {
  return localStorage.setItem(key, JSON.stringify(data))
}


export const getData = (key) => JSON.parse(localStorage.getItem(key))

export const removeData = (key)=> localStorage.removeItem(key)




