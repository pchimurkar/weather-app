import { useEffect, useState } from "react";
import styles from './Sidebar.module.css'

const Sidebar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.timeBox}>
        <h2>Live Time</h2>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};
export default Sidebar