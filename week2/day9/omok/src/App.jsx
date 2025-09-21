import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropTypes from "prop-types"
import { use } from 'react'

function Square({children, selected, inPath, onClick, disabled}) {
    return (
        <button 
        className={`square ${selected ? 'selected' : ''} ${inPath ? 'in-path' : ''}`}
        onClick={onClick}
        aria-pressed = {selected}
        disabled={disabled}
        >
            {children}
        </button>
    )
}

function Board({ size, selectedSet, pathSet, toggleIndex, locked}) {
    const last = size * size -1;

    return (
        <div 
        className='board'
        style={{gridTemplateColumns: `repeat(${size}, 80px)` }}
        >
            {Array(size * size).fill(null).map((_,i) => 
            {
                let label = "";
                if (i==0) label = "시작";
                if (i==last) label = "도착";
                
                const selected = selectedSet.has(i);
                const isBlocked = i === 0 || i === last;
                const inPath = pathSet.has(i);
                const disabled = locked || isBlocked;

                return(
                <Square 
                    key={i}
                    selected={selected}
                    inPath={inPath}
                    disabled={disabled}
                    onClick = {disabled ? undefined : () => toggleIndex(i)}
                >
                    {label}
                </Square>   
                )
            }
        )}
        </div>
    );
}

function Btn({ onClick, text, disabled = false }) {
   return (
     <button className="Btn" onClick={onClick} disabled={disabled}>
       {text}
     </button>
   );
 }

function App() {
    const [size, setSize] = useState(5);
    const [selectedSet, setSelectedSet] = useState(new Set());
    const [pathSet, setPathSet] = useState(new Set());
    const [locked, setLocked] = useState(false);

    const bfs = (n, blocked) => {
    const start = 0;
    const goal = n * n - 1;
    if (blocked.has(start) || blocked.has(goal)) {
      setPathSet(new Set());
      return;
    }

    const idx2rc = (idx) => [Math.floor(idx / n), idx % n];
    const rc2idx = (r, c) => r * n + c;

    const inRange = (r, c) => r >= 0 && c >= 0 && r < n && c < n;

    const q = [];
    const visited = new Array(n * n).fill(false);
    const parent = new Array(n * n).fill(-1);

    q.push(start);
    visited[start] = true;

    const dr = [1, -1, 0, 0];
    const dc = [0, 0, 1, -1];

    let found = false;
    while (q.length && !found) {
      const cur = q.shift();
      const [r, c] = idx2rc(cur);

      for (let k = 0; k < 4; k++) {
        const nr = r + dr[k], nc = c + dc[k];
        if (!inRange(nr, nc)) continue;
        const nxt = rc2idx(nr, nc);
        if (visited[nxt]) continue;
        if (blocked.has(nxt)) continue;

        visited[nxt] = true;
        parent[nxt] = cur;
        q.push(nxt);

        if (nxt === goal) {
          found = true;
          break;
        }
      }
    }

    if (!found) {
        alert("길 없음")  
        setSelectedSet(new Set());
        setLocked(false)
        setPathSet(new Set()); // 경로 없음
        return;
    }

    // 경로 복원
    const path = [];
    let cur = goal;
    while (cur !== -1) {
      path.push(cur);
      cur = parent[cur];
    }
    path.reverse();

    setPathSet(new Set(path));
  };

    const toggleIndex = (i) => {
        setSelectedSet(prev => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        });
    };

    useEffect(() => {
        setSelectedSet(new Set());
        setPathSet(new Set());
    }, [size])

    const reset = () => {
      setSelectedSet(new Set());  
      setPathSet(new Set());
      setLocked(false);
    };

    return (
        <div className='app'>
            <h1>최단거리 시뮬레이션</h1>
            <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
                <option value={3}>3 x 3</option>
                <option value={4}>4 x 4</option>
                <option value={5}>5 x 5</option>
                <option value={6}>6 x 6</option>
            </select>
            <Btn onClick={() => { setLocked(true); bfs(size, selectedSet); }} text="시작" disabled={locked} />
            <Btn onClick={reset} text="초기화"/>
            <Board 
            size={size}
            selectedSet={selectedSet}
            pathSet={pathSet}
            toggleIndex={toggleIndex}
            locked={locked}
            />
        </div>
    );
}

export default App


