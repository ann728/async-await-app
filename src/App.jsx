import {useState} from "react";

function App() {


    const [log, setLog] = useState("");
    const fetchData = () => new Promise((resolve, reject) => setTimeout(() => (Math.random() > 0.3 ? resolve("成功") : reject("失敗")), 1000));

    // --- .then() 版 ---
    const handleThen = () => {
        setLog("処理中...");
        fetchData()
            .then((res) => setLog("結果: " + res))
            .catch((err) => setLog("エラー: " + err));
    };

    // --- async/await 版 ---
    const handleAsync = async () => {
        setLog("処理中...");
        try {
            const res = await fetchData();
            setLog("結果: " + res);
        } catch (err) {
            setLog("エラー: " + err);
        }
    };
    return (
        <div style={{padding: "2rem"}}>
            <h1>簡単 非同期処理デモ</h1>
            <button onClick={handleThen}>
                .then()で実行
            </button>
            <button onClick={handleAsync}>async/awaitで実行</button>
            <p>{log}</p>
        </div>
    )
}

export default App
