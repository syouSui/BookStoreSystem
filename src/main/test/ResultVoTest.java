import com.syousui.dao.BookDao;
import com.syousui.dao.impl.BookDaoImpl;
import com.syousui.util.ResultVo;

/**
 * @author acmaker
 * @version 1.0.0
 * @ClassName ResultVoTest.java
 * @PackageLoaction PACKAGE_NAME
 * @createTime 2020-05-31 11:08:00 星期日
 * @Description TODO
 */
public class ResultVoTest {
    static BookDao bookDao = new BookDaoImpl();
    public static void main ( String[] args ) {

        ResultVo resultVo = new ResultVo(
                1,
                "successful",
                bookDao.findAll( )
        );
        String str_json = resultVo.toJSON( );
    }
}
