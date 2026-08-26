import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.js';
import App from './App.jsx';
import TextCorrections from './text-corrections.jsx';

createRoot(document.getElementById('root')).render(<StrictMode><App /><TextCorrections /></StrictMode>);
