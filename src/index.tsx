import { createRoot } from 'react-dom/client';
import Root from './components/app';

const container = document.getElementById('app');
const root = createRoot(container as HTMLDivElement);

root.render(<Root />);
