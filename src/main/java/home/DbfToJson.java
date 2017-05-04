package home;

import org.jamel.dbf.DbfReader;
import org.jamel.dbf.exception.DbfException;
import org.jamel.dbf.structure.DbfField;
import org.jamel.dbf.structure.DbfHeader;
import org.jamel.dbf.utils.StringUtils;


import java.io.*;
import java.nio.charset.Charset;

/**
 * Created by amanda on 27/04/17.
 */
public class DbfToJson {
    public static void writeToJsonFile(File dbf, File txt, Charset dbfEncoding) {
        try (
                DbfReader reader = new DbfReader(dbf);
                PrintWriter writer = new PrintWriter(new BufferedWriter(new FileWriter(txt)))
        ) {
            DbfHeader header = reader.getHeader();

            String[] titles = new String[header.getFieldsCount()];
            for (int i = 0; i < header.getFieldsCount(); i++) {
                DbfField field = header.getField(i);
                titles[i] = StringUtils.rightPad(field.getName(), field.getFieldLength(), ' ');
            }

//            for (String title : titles) writer.print(title);
//            writer.println();

            Object[] row;
            writer.print('[');
            while ((row = reader.nextRecord()) != null) {
                writer.print('{');
                for (int i = 0; i < header.getFieldsCount(); i++) {
                    writer.print('"'+titles[i]+'"');
                    writer.print(':');
                    DbfField field = header.getField(i);
                    String value = field.getDataType() == 'C'
                            ? new String((byte[]) row[i], dbfEncoding)
                            : String.valueOf(row[i]);

                    writer.print('"'+StringUtils.rightPad(value, field.getFieldLength(), ' ')+'"');
                    writer.print(',');

                }
                writer.print("},");
            }
        } catch (IOException e) {
            throw new DbfException("Cannot write .dbf file to .txt", e);
        }
    }
}