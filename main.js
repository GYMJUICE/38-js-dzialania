function mojaFunkcja (l1, l2){
    const dodawanie = l1+l2;
    const odejmowanie = l1-l2;
    const mnozenie = l1*l2;
    if (dodawanie>=0){
        console.log('1. Wynik dodawania wynosi ' + dodawanie);
    }
    (odejmowanie>=0){
        console.log('2. Wynik odejmowania wynosi ' + odejmowanie);
    }
    (mnozenie>=0){
        console.log('3. Wynik mnożenia wynosi ' + mnozenie);
    }
    else {
        console.log('Wynik jest ujemny')}
}
mojaFunkcja();

