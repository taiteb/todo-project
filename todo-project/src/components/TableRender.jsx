export default function TableRender({ todo }) {

    const tableRows = todo.map((task) => {
        return (
            <tr>
                <td>{task.name}</td>
                <td>{task.due}</td>
                <td className={task.complete}></td>
            </tr>
        )
    })
}
