let token = '0e852d66341ca089e3717fd58ab0ead1eb90bb91c424fec7'


export const server_calls = {
  get: async () => {
    const response = await fetch(`https://inexpensive-paint-dogwood.glitch.me/api/drinks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data from server')
    }

    return await response.json()
  },

  create: async (data: any = {}) => {
    const response = await fetch(`https://inexpensive-paint-dogwood.glitch.me/api/drinks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },

      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Failed to create new data on server')
    }

    return await response.json()
  },

  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://inexpensive-paint-dogwood.glitch.me/api/drinks/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
  },

  delete: async (id: string) => {
    const response = await fetch(`https://inexpensive-paint-dogwood.glitch.me/api/drinks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    })
  }
}