import { useEffect, useState } from "react"

export default function ToDo() {


    const [todos,setTodos] = useState([
    {id: 1, title: 'Сдать на права', complited: true},
    {id: 2, title: 'Купить машину', complited: false},
    {id: 3, title: 'Привести в идеал машину', complited: false},
  ])
  const [FilteredToDos, setFilteredToDos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [CurrentFilter, setCurrenrtFilter] = useState("All")

  useEffect(() =>{
    if(CurrentFilter === "Done"){
      setFilteredToDos(
        todos.filter(todo => todos.completed === true)
      )
    }else if(CurrentFilter === "InProcess"){
      setFilteredToDos(
        todos.filter(todo => todos.completed === false)
      )
    }else{
      setFilteredToDos(todos)
    }
  }, [CurrentFilter,todos])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {

        if (todo.id === id) {
          todo.complited = !todo.complited
        }

        return todo
      })
    )
  }

  function addTodo() {
    setTodos(
      [
        ...todos,
        { id: todos.length + 1, title: newTodo, completed: false }
      ]
    )
  }
  function RemoveTodos(id){
    setTodos(
      todos.filter(todo =>{
        return todo.id !== id
      })
    )
  }

  return (
    <div>
      <h1>ToDo лист</h1>
      <div className="fitters">
        <label>
        Выполнимые 
        <input type="Radio" name="filter" onChange={() => setCurrenrtFilter('Done')}/>
      </label>
       <label>
         Не выполнимые 
          <input type="Radio" name="filter" onChange={() => setCurrenrtFilter('In process')}/>
      </label>
       <label>
        Все 
         <input type="Radio" name="filter"onChange={() => setCurrenrtFilter('All')} />
      </label>
      </div>

      {
        FilteredToDos.map(todo => (
          <div className={todo.completed ? 'striked' : ''}>
            <input onChange={() => toggleTodo(todo.id)} checked={todo.completed} type="checkbox" />
            <span>{todo.title}</span>
            <button onClick={() => RemoveTodos(todo.id)}>Х</button>
          </div>
        ))
      }
      <h2>Добавить дело</h2>

      <input type="text" value={newTodo} onInput={(event) => setNewTodo(event.target.value)} placeholder="Введите название дела" />
      <button onClick={() => addTodo()}>Добавить</button>
    </div>
  )

}
