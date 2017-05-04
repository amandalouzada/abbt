package home;

/**
 * Created by amanda on 04/05/17.
 */
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import java.util.List;

public interface IMongoHelper {
    MongoCollection<Document> getCollection(String collecitonName);
    List<Document> getAll(String collectionName);
    List<Document> getAllLimit(String collectionName, Integer limite, Integer pular);
    List<Document> getByDocument(String collectionName, Document document);
    Document getSingleByDocument(String collectionName, Document document);
    void insert(String collectionName, Document document);
    void insert(String collectionName, List<Document> documentList);
    void delete(String collectionName, Document document);
    void delete(String collectionName, List<Document> documentList);
    void update(String collectionName, Document oldVersion, Document newVersion);
}