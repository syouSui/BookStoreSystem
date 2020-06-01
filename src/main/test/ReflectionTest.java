import com.syousui.service.BookService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

/**
 * @author acmaker
 * @version 1.0.0
 * @ClassName ReflectionTest.java
 * @PackageLoaction PACKAGE_NAME
 * @createTime 2020-05-31 10:03:00 星期日
 * @Description TODO
 */
public class ReflectionTest {
    public static void main ( String[] args ) {
        String str_method = "test";
        Method method;
        try {
            method = BookService.class.getMethod( str_method );
            method.invoke( new BookService() );
        } catch ( NoSuchMethodException e ) {
            e.printStackTrace( );
        } catch ( IllegalAccessException e ) {
            e.printStackTrace( );
        } catch ( InvocationTargetException e ) {
            e.printStackTrace( );
        }
    }
}
