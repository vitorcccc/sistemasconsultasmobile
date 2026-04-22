# Sistema de Consultas Médicas - Mobile

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

## INTEGRANTES DO GRUPO

| Nome | RM |
|------|-----|
| **Vitor Couto Victorino** | RM554965 |

---

## SOBRE O PROJETO

Este é um aplicativo mobile de **Sistema de Consultas Médicas** desenvolvido em React Native com TypeScript como parte das atividades da disciplina. O aplicativo permite visualizar e gerenciar consultas médicas, com funcionalidades completas de gerenciamento de status e interface intuitiva.

### Evolução do Projeto

| Aula | Data | Conteúdo |
|------|------|----------|
| **Aula 1** | 03/03/2026 | MVP Simples - Estrutura inicial do app |
| **Aula 2** | 10/03/2026 | TypeScript + Types/Interfaces - Modelagem do domínio |
| **Aula 3** | 17/03/2026 | Componentização - Extração do ConsultaCard |
| **Aula 4** | 24/03/2026 | Separação de Estilos + Screens - Arquitetura profissional |
| **Aula 5** | 31/03/2026 | useState + AsyncStorage + useEffect - Persistência de dados |
| **Aula 6** | 07/04/2026 | Arrays no AsyncStorage + Service Layer + React Navigation |
| **CP2** | 14/04/2026 | Refatoração de Styles - Separação completa de estilos |

### Funcionalidades Implementadas

- Visualização detalhada de consultas médicas
- Gerenciamento de status (agendada, confirmada, cancelada, realizada)
- Confirmação e cancelamento de consultas
- Formatação de valores monetários (R$)
- Formatação de datas no padrão brasileiro
- Tipagem forte com TypeScript
- Interface responsiva com cards
- Feedback visual baseado no status
- Persistência de dados com AsyncStorage
- Navegação entre telas com React Navigation
- Service layer para organização do código
- Arquitetura profissional com separação de responsabilidades
- Estilos completamente separados da lógica

---

## CONCEITOS DE REACT NATIVE UTILIZADOS

| Conceito | Descrição |
|----------|-----------|
| **Componentes Funcionais** | Uso de funções como componentes React |
| **Hooks (useState, useEffect)** | Gerenciamento de estado e ciclo de vida |
| **Props** | Passagem de dados entre componentes |
| **Props Opcionais** | `onConfirmar?` e `onCancelar?` para flexibilidade |
| **Callbacks** | Comunicação filho → pai mantendo fluxo unidirecional |
| **TypeScript** | Tipagem forte para prevenir erros |
| **Interfaces e Types** | Definição de modelos de dados (globais vs locais) |
| **Renderização Condicional** | Exibição de botões baseada no status |
| **Estilização com StyleSheet** | Criação de estilos organizados |
| **Separação de Estilos** | Arquivos dedicados apenas para estilos |
| **ScrollView** | Suporte a rolagem de conteúdo |
| **FlatList** | Renderização eficiente de listas grandes |
| **StatusBar** | Personalização da barra de status |
| **Flexbox** | Layout responsivo e adaptável |
| **Platform.select** | Estilos específicos por plataforma (Web, iOS, Android) |
| **Barrel Exports** | Exportação centralizada com index.ts |

---

## CONCEITOS DE TYPESCRIPT UTILIZADOS

| Conceito | Descrição |
|----------|-----------|
| **Type Aliases** | Criação de tipos personalizados |
| **Interfaces** | Definição de contratos para objetos |
| **Union Types** | Status da consulta com valores pré-definidos |
| **Optional Properties** | Campos opcionais (telefone, descrição, observações) |
| **Type Safety** | Garantia de tipos em tempo de compilação |
| **Import/Export** | Modularização do código |
| **Types Locais vs Globais** | Separação entre tipos específicos de componente e tipos compartilhados |

---

## ESTRUTURA DE TIPOS E INTERFACES

### StatusConsulta
```typescript
type StatusConsulta = "agendada" | "confirmada" | "cancelada" | "realizada";
```

### Especialidade
```typescript
type Especialidade = {
  id: number;
  nome: string;
  descricao?: string;
};
```

### Paciente
```typescript
type Paciente = {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
};
```

### Medico
```typescript
interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
}
```

### Consulta
```typescript
interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}
```

---

## ESTRUTURA DE PASTAS

```
cp02/
│
├── App.tsx                          # Ponto de entrada
├── package.json
├── tsconfig.json
├── README.md
│
└── src/
    ├── components/                  # Componentes reutilizáveis
    │   ├── ConsultaCard.tsx
    │   ├── EmptyState.tsx
    │   ├── Loading.tsx
    │   ├── Button.tsx
    │   ├── Input.tsx
    │   └── index.ts
    │
    ├── screens/                     # Telas da aplicação
    │   ├── HomeScreen.tsx
    │   ├── ConsultasListScreen.tsx
    │   ├── ConsultaDetalhesScreen.tsx
    │   ├── NovaConsultaScreen.tsx
    │   ├── Login.tsx
    │   ├── CadastroPaciente.tsx
    │   ├── MinhasConsultas.tsx
    │   ├── Admin.tsx
    │   └── index.ts
    │
    ├── styles/                      # Estilos separados da lógica
    │   ├── app.styles.ts
    │   ├── consultaCard.styles.ts
    │   ├── consultasList.styles.ts
    │   ├── consultaDetalhes.styles.ts
    │   ├── home.styles.ts
    │   ├── login.styles.ts
    │   ├── novaConsulta.styles.ts
    │   ├── cadastroPaciente.styles.ts
    │   ├── minhasConsultas.styles.ts
    │   └── index.ts
    │
    ├── interfaces/                  # Interfaces globais
    │   ├── consulta.ts
    │   └── medico.ts
    │
    ├── types/                       # Types globais
    │   ├── especialidade.ts
    │   ├── paciente.ts
    │   ├── statusConsulta.ts
    │   └── index.ts
    │
    ├── services/                    # Service layer
    │   ├── storage.ts
    │   ├── consultasService.ts
    │   ├── apiService.ts
    │   └── index.ts
    │
    ├── navigation/                  # Configuração de navegação
    │   └── index.tsx
    │
    └── utils/                       # Utilitários
        ├── formatters.ts
        └── validators.ts
```

---

## COMO EXECUTAR O PROJETO

### Pré-requisitos
- [Node.js](https://nodejs.org/) (16.0 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) no celular (iOS/Android)

### Passos para executar

1. **Clone o repositório**
```bash
git clone https://github.com/vitorcccc/cp02-mobile.git
```

2. **Acesse a pasta do projeto**
```bash
cd cp02-mobile
```

3. **Instale as dependências**
```bash
npm install
```

4. **Execute o projeto**
```bash
npx expo start
```

5. **Abra no celular**
- Escaneie o QR Code com o aplicativo Expo Go (Android)
- Ou escaneie com a câmera do iPhone (iOS)

6. **Para abrir no navegador (Web)**
- Após iniciar o expo, pressione a tecla `w`

---

## COMO USAR O APLICATIVO

### Tela Principal (HomeScreen)

Ao iniciar o aplicativo, você verá um menu com cards:

1. **Minhas Consultas**: Lista todas as consultas com filtros
2. **Agendar Consulta**: Formulário para nova consulta
3. **Meu Perfil**: Dados do usuário
4. **Configurações**: Ajustes do app

### Tela de Lista de Consultas (ConsultasListScreen)

- Exibe todas as consultas do usuário
- Filtros por status: Todas, Agendadas, Confirmadas
- Cada consulta tem botões: Confirmar, Cancelar, Ver Detalhes

### Tela de Detalhes (ConsultaDetalhesScreen)

- Exibe informações completas da consulta
- Permite confirmar ou cancelar (dependendo do status)

### Tela Admin (Administrativa)

- Cadastrar especialidades
- Cadastrar médicos
- Criar consultas de teste

---

## FLUXO DE COMUNICAÇÃO (Pai → Filho → Pai)

```
┌─────────────────────────────────────────────────────────────┐
│                    HomeScreen.tsx (PAI)                    │
│                                                             │
│  const [consultas, setConsultas] = useState(...) ← ESTADO  │
│                                                             │
│  function confirmarConsulta(id) {                          │
│    setConsultas(consultas.map(...))                        │
│  }                                                          │
│                                                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ passa props ↓
                     │ • consulta
                     │ • onConfirmar={confirmarConsulta}
                     │
┌────────────────────▼────────────────────────────────────────┐
│              ConsultaCard.tsx (FILHO)                      │
│                                                             │
│  function ConsultaCard({ consulta, onConfirmar }) {        │
│    return (                                                │
│      <Button onPress={() => onConfirmar(consulta.id)} />   │
│    );                                                      │
│  }                                                          │
└─────────────────────────────────────────────────────────────┘
```

---

## EXEMPLO DE EXECUÇÃO

```text
=== SISTEMA DE CONSULTAS ===
Bem-vindo ao sistema!

┌─────────────────────────────────┐
│            📅                    │
│       Minhas Consultas           │
│  Visualize e gerencie suas       │
│       consultas                  │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│            ➕                    │
│       Agendar Consulta           │
│   Agende uma nova consulta       │
│            médica                │
└─────────────────────────────────┘
```

---

## TECNOLOGIAS UTILIZADAS

- **React Native**: Framework para desenvolvimento mobile
- **Expo**: Plataforma para desenvolvimento React Native
- **TypeScript**: Superset JavaScript com tipagem estática
- **React Hooks**: Gerenciamento de estado e efeitos
- **React Navigation**: Navegação entre telas
- **AsyncStorage**: Persistência local de dados
- **Expo StatusBar**: Controle da barra de status

---

## CONCEITOS APLICADOS

### React Native
- Componentização
- Estado e imutabilidade
- Renderização condicional
- Estilização com StyleSheet
- Layout responsivo
- Props opcionais
- Callbacks para comunicação
- Platform.select para estilos específicos
- FlatList para listas eficientes

### TypeScript
- Tipagem estática
- Interfaces e Types
- Propriedades opcionais
- Union Types
- Type Safety
- Types locais vs globais

### Arquitetura
- Separação de responsabilidades (SRP)
- Separação de estilos da lógica
- Estrutura de telas (screens)
- Barrel exports (index.ts)
- Fluxo unidirecional de dados
- Service layer para persistência

### Boas Práticas
- Código documentado
- Organização modular
- Nomenclatura consistente
- Validações de dados
- Feedback visual
- Git Flow com branches e PRs
