import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ContatosTela from './telas/ContatosTela';
import AdicionarContatosTela from './telas/AdicionarContatosTela';

const Navigator = createStackNavigator({
    Contatos: ContatosTela,
    AdicionarContato: AdicionarContatosTela
});

export default createAppContainer(Navigator);