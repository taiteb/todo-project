import { useEffect, useState } from 'react'
import './App.css'
import TableRender from './components/TableRender';

function App() {
  const [todo, setTodo] = useState(
    [
      {
        name: "Feed the dog",
        due: "8-30-23",
        complete: false
      },
      {
        name: "Complete math homework",
        due: "9-4-23",
        complete: false
      },
      {
        name: "Cook a big pot of spaghetti",
        due: "8-29-23",
        complete: false
      }
    ]
  );
  const [complete, setComplete] = useState([]);

  // populating the todo with dummy data
  // useEffect(() => {
  //   setTodo()
  // }, [])

  return (
    <>
      <h3>To Do:</h3>
      <table>
        <thead>
          <tr>
            <td>Task</td>
            <td>Due</td>
            <td>Complete</td>
          </tr>
        </thead>
        <tbody>
          <TableRender todo={todo} />
        </tbody>

      </table>
    </>
  )
}

export default App
