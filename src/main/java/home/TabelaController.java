package home;

import org.bson.Document;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.nio.charset.Charset;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class TabelaController {

    private static  final MongoHelper mongoHelper = MongoHelper.getInstance("localhost:27017", "abbt");

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/tabela")
    public Tabela tabela(@RequestParam(value="name", defaultValue="World") String name) {
        return new Tabela(counter.incrementAndGet(),
                String.format(template, name));
    }

    @RequestMapping("/sobre")
    public String literal() {
        return "Amanda Louzada";
    }

    @RequestMapping("/inserir")
    public void dbf(){
        System.out.println("Inserindo no banco");

        DbfToMongo.insertToMongo( new File("streets.dbf"), Charset.forName("cp866"));

    }

    @RequestMapping("/listar")
    public List<Document> listarMongo(){
        System.out.println("Listando");
        return mongoHelper.getAll("abbt_tabela");

    }

    @RequestMapping(value="/listar/{limite}/{pular}", method= RequestMethod.GET)
    public @ResponseBody
    List<Document> listarLimiteMongo(@PathVariable Integer limite, @PathVariable Integer pular) {
        return mongoHelper.getAllLimit("abbt_tabela",limite, pular);
    }



    @RequestMapping(value="/listarParamentro/{parametro}/{valor}", method= RequestMethod.GET)
    public @ResponseBody
    List<Document> listarParametro(@PathVariable String parametro, @PathVariable String valor) {
        Document document = new Document(parametro, valor);
        return mongoHelper.getByDocument("abbt_tabela",document);
    }



     @RequestMapping(value="/listarParamentroL/{parametro}/{valor}/{limite}/{pular}", method= RequestMethod.GET)
     public @ResponseBody
     List<Document> listarParametroL(@PathVariable String parametro, @PathVariable String valor, @PathVariable Integer limite, @PathVariable Integer pular) {
         Document document = new Document(parametro, valor);
         return mongoHelper.getByDocumentLimit("abbt_tabela",document, limite, pular);
     }


    @RequestMapping("/dbfj")
    public void getTabela(){
        System.out.println("Convert to JSON");

        DbfToJson.writeToJsonFile( new File("streets.dbf"),  new File("streets.txt"), Charset.forName("cp866"));

    }

    @RequestMapping(value = "/getFile/{path}", method= RequestMethod.GET)
    public void getFile(@PathVariable String path) {
        System.out.println("inserindo");
        DbfToMongo.insertToMongo( new File(path+".dbf"), Charset.forName("cp866"));
    }


}
