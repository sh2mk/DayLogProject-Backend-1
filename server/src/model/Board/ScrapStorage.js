"use strict"

const db=require("../../config/db");


class ScrapStorage{
    static getScrap(no, id, where){
        return new Promise((resolve, reject)=>{
            console.log("스크랩 조회 시작")
            const query="SELECT * FROM capstone_design.scrap "+where;
            console.log(query);
            db.query(query ,[no, id], (err, data)=>{
                if(err) {
                    console.log("조회 실패", err);
                    reject(err);
                }
                else {
                    console.log("조회 성공");
                    resolve(data);
                }
            });
        });
    }

    static saveScrap(id, no){
        return new Promise((resolve, reject)=>{
            const query="INSERT INTO capstone_design.scrap(board_no, member_id) VALUES(?, ?)";
            db.query(query, [no, id] ,(err, data)=>{
                if(err) reject(err);
                else {
                    console.log("스크랩 저장 성공");
                    resolve({success : true});
                }
            });
        });
    }

    static removeScrap(id, no){
        return new Promise((resolve, reject)=>{
            const query="DELETE FROM capstone_design.scrap WHERE member_id=? AND board_no=?";
            db.query(query, [id, no] ,(err, data)=>{
                if(err) reject(err);
                else {
                    console.log("스크랩 삭제 성공");
                    resolve({success : true});
                }
            });
        });
    }
}

module.exports=ScrapStorage;