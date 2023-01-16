const criandografico = document.getElementById('myChart');

  new Chart(criandografico, {
    type: 'bar',
    data: {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
      datasets: [{ 
        label: 'R$',
        data: [145.65, 119.99, 238.99, 305.59, 206.43, 123.78, 599.99],
        backgroundColor: [
          '#9ad344',
          '#edd569',
          '#eaaa70',
          '#ee6668',
          '#e969ef',
          '#5752e1',
          '#3c95e7'],
     }]
    },
    
  });



