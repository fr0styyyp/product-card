const usersFromStorage = localStorage.getItem('users')
const message = document.querySelector('.data-message')
const container = document.querySelector('.user-cards-container')
const template = document.querySelector('#user-template')

const showLoadingText = () => {
  message.textContent = 'Данные загружаются'
}

async function fetchUsers() {
  try {
    const response = await fetch('users.json')
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`)
      
    const data = await response.json()
    
    localStorage.setItem('users', JSON.stringify(data))
    return data;
  } catch (error) {
    message.textContent = 'Ошибка при загрузке данных'
    console.error('Произошла ошибка:', error)
  }
}

const deleteUser = id => {
  const storedData = localStorage.getItem('users');
  if(!storedData) return;
  
  let users = JSON.parse(storedData)
  
  users = users.filter(user => user.id !== id)
  localStorage.setItem('users', JSON.stringify(users))
  renderUsers(users)
}

const renderUsers = (users) => {
  message.textContent = ''
  container.innerHTML = ''
  
  if (!users || users.length === 0) {
    message.textContent = 'Список пуст'
    return;
  }
  
  users.forEach(user => {
    const clone = template.content.cloneNode(true)
    clone.querySelector('.user-name').textContent = `${ user.name } ${ user.surname }`
    clone.querySelector('.user-email').textContent = user.email
    clone.querySelector('.user-age').textContent = `Возраст: ${ user.age }`
    
    clone.querySelector('.delete-btn').addEventListener('click', () => {
      deleteUser(user.id)
    })
    container.appendChild(clone)
  });
} 

if (!usersFromStorage || usersFromStorage.length === 0) {
  showLoadingText()
  
  setTimeout(async () => {
    const result = await fetchUsers()
    if (result) {
      const users = JSON.parse(localStorage.getItem('users'))
      renderUsers(users)
    }
  }, 2000);

} else {
  const users = JSON.parse(usersFromStorage)
  renderUsers(users)
}

const getAllBtn = document.querySelector('#get-all-btn')
const deleteAllBtn = document.querySelector('#delete-all-btn')

deleteAllBtn.addEventListener('click', () => {
  localStorage.setItem('users', JSON.stringify([]));
  renderUsers([])
})

getAllBtn.addEventListener('click', async () => {
  const storedData = JSON.parse(localStorage.getItem('users') || '[]')
  try {
  const users = await fetchUsers()
  
  if (storedData.length === users.length && users.length !== 0) {
    alert('Информационное сообщение: Все пользователи и так отображены на странице.')
  } else {
    renderUsers(users)
  }
  } catch (error) {
    console.error('Не удалось проверить данные:', error)
  }
})