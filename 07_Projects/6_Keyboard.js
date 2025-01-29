const insert = function (e) {
    document.getElementById('key');
  };
  
  window.addEventListener('keydown', function () {
    insert.innerHTML = `
    <div class=table>
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
    `;
  });
  