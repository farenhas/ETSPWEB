const ajax = new XMLHttpRequest();
ajax.onload = function () {
  if (ajax.status === 200) {
    const data = JSON.parse(ajax.responseText);
    displayCards(data);
  } else {
    console.error('Failed to fetch data from the API');
  }
};

const url = 'http://159.223.51.203:81/api/bio';
ajax.open('GET', url);
ajax.send();

function displayCards(data) {
  const cardContainer = document.getElementById('cardContainer');

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'col-xl-3 col-md-6 mb-4';

    card.innerHTML = `
      <div class="card shadow h-100 py-2">
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col">
              <i class="fas fa-pencil-alt fa-2x text-info"></i>
            </div>
            <div class="col-auto text-right">
              <div class="h5 font-weight-bold text-gray-800">${item.name}</div>
              <div class="text-xs font-weight-bold text-gray-800 mb-1">${item.id}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    cardContainer.appendChild(card);
  });
}
