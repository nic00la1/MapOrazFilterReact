import './App.css'
import games from './games.json'
function App() {

  return (
    <>
      <table>
        <tr>
          <td>ID</td>
          <td>Tytuł</td>
          <td>Gatunek</td>
          <td>Data wydania</td>
          <td>Licza pól punktowywch</td>
        </tr>
      </table>
      
      <input type="radio" id="action" value="Action"/>
      <label for="action">Action</label>
      <input type="radio" id="rpg" value="RPG"/>
      <label for="rpg">RPG</label>
      <input type="radio" id="scifi" value="Sci-Fi"/>
      <label for="scifi">Sci-Fi</label>
      <input type="radio" id="adventure" value="Adventure"/>
      <label for="adventure">Adventure</label>

      <form>
        {games[0].id}&nbsp;
        {games[0].title}&nbsp;
        {games[0].genre}&nbsp;
        {games[0].releaseYear}&nbsp;
        {games[0].count}&nbsp;
      </form>
    </>
  )
}

export default App
