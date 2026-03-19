import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import './DynamicAboutImage.css';

const codeLines = [
    "const developer = new Developer('Priyanshu');",
    "developer.setRole('Full Stack Engineer');",
    "",
    "async function solveProblem(bug) {",
    "  console.log('Analyzing root cause...');",
    "  await bug.debug();",
    "  const solution = await developer.writeCode();",
    "  ",
    "  if (solution.isOptimal()) {",
    "    return solution.deploy();",
    "  }",
    "  return solveProblem(bug);",
    "}",
    "",
    "solveProblem(new Bug('Critical Issue'));",
    "// Output: Problem Solved! 🚀"
];

export default function DynamicAboutImage() {
    const [displayedCode, setDisplayedCode] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (lineIndex < codeLines.length) {
            if (charIndex < codeLines[lineIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedCode((prev) => prev + codeLines[lineIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, 30); // Typing speed
            } else {
                timeout = setTimeout(() => {
                    setDisplayedCode((prev) => prev + "\n");
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 400); // Wait at end of line
            }
        } else {
            timeout = setTimeout(() => {
                setDisplayedCode("");
                setLineIndex(0);
                setCharIndex(0);
            }, 3000); // Restart typing after 3s
        }

        return () => clearTimeout(timeout);
    }, [lineIndex, charIndex]);

    return (
        <div className="dynamic-image-wrapper">
            <div className="dynamic-image-container">
                <img src="/developer_typing.png" alt="Developer Typing" className="developer-img" />
                <div className="glowing-orb"></div>
            </div>

            <div className="floating-editor">
                <div className="editor-header">
                    <Terminal size={14} className="terminal-icon" />
                    <span>problem_solver.js</span>
                    <div className="window-controls">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                </div>
                <div className="editor-body">
                    <pre>
                        <code className="typing-code">{displayedCode}</code>
                        <span className="cursor">|</span>
                    </pre>
                </div>
            </div>
        </div>
    );
}
