package home;

import org.bson.Document;
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
public class DbfToMongo {
    public static void insertToMongo(File dbf, File txt, Charset dbfEncoding) {
        long tempoInicial = System.currentTimeMillis();
        // método que deve ser verificado o tempo de execução
        MongoHelper mongoHelper = MongoHelper.getInstance("localhost:27017", "abbt");
        Document document = new Document();

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
            while ((row = reader.nextRecord()) != null) {
                for (int i = 0; i < header.getFieldsCount(); i++) {writer.print(':');
                    DbfField field = header.getField(i);
                    String value = field.getDataType() == 'C'
                            ? new String((byte[]) row[i], dbfEncoding)
                            : String.valueOf(row[i]);
                    document.append(titles[i],StringUtils.rightPad(value, field.getFieldLength(), ' '));

                }
                mongoHelper.insert("abbt_tabela",document);
                document = new Document();
            }
        } catch (IOException e) {
            throw new DbfException("Cannot write .dbf file to .txt", e);
        }

        long tempoFinal = System.currentTimeMillis();
        System.out.println( "TEMPO");

        System.out.println( tempoFinal - tempoInicial );
        System.out.println( "MIN:");


        System.out.println( ((tempoFinal - tempoInicial)/ 60000 ) % 60 );

    }
}