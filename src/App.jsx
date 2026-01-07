import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
    const [mode, setMode] = useState('video');
    const [time, setTime] = useState(new Date());
    const videoRef = useRef(null);

    useEffect(() => {
        if (mode === 'video' && videoRef.current) {
            const video = videoRef.current;
            video.currentTime = 0;
            video.playbackRate = 0.5;
            video.play().catch(() => {});
        }
    }, [mode]);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (mode === 'clock') {
            const timeout = setTimeout(() => setMode('video'), 10000);
            return () => clearTimeout(timeout);
        }
    }, [mode]);

    // 시계 바늘 각도
    const secDeg = time.getSeconds() * 6;
    const minDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1;
    const hrDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

    // 1부터 12까지 숫자 생성을 위한 배열
    const hourNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="container">
            <div className={`screen ${mode === 'video' ? 'visible' : 'hidden'}`}>
                <video ref={videoRef} className="fullscreen-element" muted onEnded={() => setMode('clock')} playsInline>
                    <source src="/pause.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={`screen ${mode === 'clock' ? 'visible' : 'hidden'}`}>
                <div className="clock-container">
                    <div className="analog-clock">
                        {/* 시간 숫자 배치 */}
                        {hourNumbers.map((num) => (
                            <div
                                key={num}
                                className="hour-number"
                                style={{ transform: `rotate(${num * 30}deg)` }}
                            >
                                <span style={{ transform: `rotate(-${num * 30}deg)` }}>{num}</span>
                            </div>
                        ))}

                        {/* 바늘들 */}
                        <div className="hand hour" style={{ transform: `rotate(${hrDeg}deg)` }}></div>
                        <div className="hand minute" style={{ transform: `rotate(${minDeg}deg)` }}></div>
                        <div className="hand second" style={{ transform: `rotate(${secDeg}deg)` }}></div>
                        <div className="center-pin"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;