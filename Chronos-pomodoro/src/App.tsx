import { Heading } from './components/Heading';
import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {

    return (
    <>
        <Heading >
            Ola mundo 1 
            <button>
                <TimerIcon />
            </button> 
        </Heading> 

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, dolore! Nesciunt labore nam iusto, sunt aliquam aut necessitatibus repellat fugit mollitia veritatis culpa obcaecati. Repellat dicta aspernatur illo maxime aliquam.
        </p>
    </>
    )
}

