# Clara Voice Dashboard

A modern, responsive dashboard for managing voice agents and call analytics built with React, Tailwind CSS, and React Hook Form.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **State Management**: Form state managed with React Hook Form
- **Interactive Components**: Toggle switches for agent status management
- **Analytics Dashboard**: Real-time call statistics and metrics
- **Agent Management**: View and manage active agents with department information

## Technology Stack

- **React**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Hook Form**: Performant forms with easy validation
- **Heroicons**: Beautiful hand-crafted SVG icons

## Project Structure

```
src/
├── components/
│   ├── Dashboard/
│   │   ├── Dashboard.js
│   │   ├── StatsCards.js
│   │   └── ActiveAgentsTable.js
│   ├── Layout/
│   │   ├── Layout.js
│   │   ├── Sidebar.js
│   │   └── Header.js
│   └── UI/
│       └── Toggle.js
├── data/
│   └── mockData.js
├── hooks/
│   └── useAgents.js
├── App.js
└── index.js
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clara-voice-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser.

## Features Overview

### Dashboard Statistics
- Total Calls Today
- Total Calls This Week  
- Average Call Duration
- Failed Calls

### Agent Management
- View active agents
- Toggle agent availability
- Department and contact information
- Real-time status updates

### Responsive Design
- Mobile-first approach
- Collapsible sidebar for mobile devices
- Optimized layouts for different screen sizes

## Customization

### Adding New Agents
Update the `src/data/mockData.js` file to add new agents:

```javascript
export const activeAgents = [
  {
    id: 3,
    name: "New Agent",
    department: "Support",
    phoneNumber: "555-0000",
    isActive: true
  }
];
```

### Styling
The project uses Tailwind CSS. Custom colors and configurations can be modified in `tailwind.config.js`.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design supports viewport widths from 320px to 1920px+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
