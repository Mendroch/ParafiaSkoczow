function performUpdate() {
  // Rozpoczęcie procesu aktualizacji
  window.inAppUpdate
    .startUpdate()
    .then(() => {
      alert('Aktualizacja zakończona pomyślnie');
    })
    .catch((error) => {
      alert('Błąd podczas aktualizacji:', error);
    });
}

export const checkUpdate = async () => {
  // eslint-disable-next-line
  if (device.platform === 'Android') {
    // Sprawdzenie dostępności aktualizacji
    window.inAppUpdate
      .checkForUpdate()
      .then((updateAvailable) => {
        if (updateAvailable) {
          // Jeśli jest dostępna aktualizacja, wyświetl komunikat o tym
          if (
            // eslint-disable-next-line
            confirm('Dostępna jest nowa wersja aplikacji. Czy chcesz ją zainstalować?')
          ) {
            // Jeśli użytkownik potwierdzi chęć aktualizacji, rozpocznij proces aktualizacji
            performUpdate();
          }
        } else {
          console.log('Aplikacja jest aktualna');
        }
      })
      .catch((error) => {
        alert('Błąd podczas sprawdzania aktualizacji:', error);
      });
    // eslint-disable-next-line
  } else if (device.platform === 'iOS') {
    alert('iOS');
  }
};
