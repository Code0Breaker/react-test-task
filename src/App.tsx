import { useState } from 'react'
import './App.scss'
import { Button } from './components/button/button'
import { Card } from './components/card/card'
import { Header } from './components/header/header'
import { Sidebar } from './components/sideBar/sidebar'
import { TextField } from './components/textField.tsx/textField'
import { useGetUsers } from './hooks/useGetUsers'
import CardsLayout from './layouts/cardsLayout/cardsLayout'
import MainLayout from './layouts/mainLayout/mainLayout'
import { filterUsers } from './utils'

function App() {
  const [value, setValue] = useState<string>('')
  const { ageGroups, genderGroups, updateUsers, users, handleDelete } = useGetUsers()
  const [choosenCard, setChooseCard] = useState<string | null>(null)
  return (
    <MainLayout>
      <Header>
        <TextField change={setValue} value={value} />
        <Button value='Refresh Users' onClick={updateUsers} />
      </Header>
      <div className='main_content'>
        {users && <CardsLayout>
          {filterUsers(users, value)?.map(user => <Card key={user.login.uuid} user={user} handleDelete={handleDelete} uuid={choosenCard} setChooseCard={setChooseCard} />)}
        </CardsLayout>}
        {users && <Sidebar count={users?.length} ageGroups={ageGroups} genderGroups={genderGroups} />}
      </div>

    </MainLayout>
  )
}

export default App
