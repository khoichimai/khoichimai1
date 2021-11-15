const dbConnect = require("../util/connectDB");
class LecturerController {
    //url: schedule/lecturer/getSchedule
    //method: get
    getSchedule(req, res, next) {
        const idUser = req.idUser;
        if (!idUser)
            return res
                .status(400)
                .json({ success: false, message: "user not found" });

        try {
            const query = "select * from account where idUser= ?";
            dbConnect.query(query, [idUser.idUser], (err, result) => {
                if (err) console.log("no data return");
                if (result.length > 0) {
                    if (!result[0].MaGiangVien) {
                        const queryGetScheduleLecturer =
                            "select * from kythuatvien join chitietlichtruc on kythuatvien.MaNhanvien=chitietlichtruc.MaNhanVien join lichtruc on lichtruc.malichtruc=chitietlichtruc.malichtruc where kythuatvien.manhanvien=?";
                        dbConnect.query(
                            queryGetScheduleLecturer,
                            [result[0].MaNhanVien],
                            (err, lichtruc) => {
                                if (err)
                                    return res.status(500).json({
                                        success: false,
                                        message: "database error"
                                    });
                                if (lichtruc.length === 0)
                                    return res.status(404).json({
                                        success: false,
                                        message: "schedule not found"
                                    });
                                return res.json({
                                    success: true,
                                    message: "data request successful",
                                    result
                                });
                            }
                        );
                    } else {
                        const queryGetSchedule =
                            "select * from giangvien join lichday on giangvien.MaGiangVien=lichday.MaGiangVien where giangvien.MaGianVien=?";
                        dbConnect.query(
                            queryGetSchedule,
                            [result[0].MaGiangVien],
                            (err, lichday) => {
                                if (err)
                                    return res.status(500).json({
                                        success: false,
                                        message: "database error"
                                    });
                                if (lichday.length === 0)
                                    return res.status(404).json({
                                        success: false,
                                        message: "schedule not found"
                                    });
                                return res.json({
                                    success: true,
                                    message: "data request successful",
                                    result
                                });
                            }
                        );
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LecturerController();
