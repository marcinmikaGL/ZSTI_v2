var xhr = new XMLHttpRequest();

// Określ metodę żądania i URL docelowego
xhr.open('GET', 'https://example.com/api/data', true);

// Ustaw funkcję obsługi zdarzenia dla gotowości stanu
xhr.onreadystatechange = function () {
  // Sprawdź, czy żądanie zostało zakończone (readyState = 4) i status jest OK (status = 200)
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Pobierz dane odpowiedzi
    var responseData = JSON.parse(xhr.responseText);

    // Wykonaj działania na danych
    console.log(responseData);
  }
};

// Wyślij żądanie
xhr.send();
