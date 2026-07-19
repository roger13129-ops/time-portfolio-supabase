// app.js
import { supabase } from './src/supabaseClient.js';

async function testConnection() {
    console.log("正在嘗試連線 Supabase...");
    
    try {
        // 嘗試查詢 tasks 表，取 1 筆資料
        const { data, error } = await supabase
            .from('tasks')
            .select('id, name')
            .limit(1);

        if (error) {
            // 如果報錯，把錯誤訊息顯示出來
            console.error("❌ 連線失敗，錯誤資訊如下：", error);
        } else {
            // 如果成功，顯示 "成功" 的訊息
            console.log("✅ 連線成功！");
            console.log("資料庫回應資料:", data);
        }
    } catch (err) {
        console.error("❌ 發生未知錯誤：", err);
    }
}

// 執行測試
testConnection();

async function testInsert() {
    const { data, error } = await supabase
        .from('tasks')
        .insert([
            { name: '測試任務', category: '工作', value_type: 'investment' }
        ]);

    if (error) {
        console.error('寫入失敗:', error);
    } else {
        console.log('成功寫入！請重新檢查讀取結果');
    }
}
// 呼叫它
testInsert();
