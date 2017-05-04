package home;

/**
 * Created by amanda on 04/05/17.
 */
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;


public class MongoHelper implements IMongoHelper {

    private static MongoHelper _instance = null;
    private MongoDatabase mongoDatabase = null;

    public MongoHelper(String host, String databaseName) {
        mongoDatabase = new MongoClient(host).getDatabase(databaseName);
    }

    public static MongoHelper getInstance(String host, String databaseName) {
        if(_instance == null) {
            _instance = new MongoHelper(host, databaseName);
        }
        return _instance;
    }

    public MongoCollection<Document> getCollection(String collecitonName) {
        return mongoDatabase.getCollection(collecitonName);
    }

    public List<Document> getAll(String collectionName) {
        return mongoDatabase.getCollection(collectionName).find().into(new ArrayList<>());
    }

    public List<Document> getAllLimit(String collectionName, Integer limite, Integer pular) {
        return mongoDatabase.getCollection(collectionName).find().limit(limite).skip(pular).into(new ArrayList<>());
    }

    public List<Document> getByDocument(String collectionName, Document document) {
        return mongoDatabase.getCollection(collectionName).find(document).into(new ArrayList<>());
    }


    public List<Document> getByDocumentLimit(String collectionName, Document document,Integer limite, Integer pular) {
        return mongoDatabase.getCollection(collectionName).find(document).limit(limite).skip(pular).into(new ArrayList<>());
    }

    public Document getSingleByDocument(String collectionName, Document document) {
        return getByDocument(collectionName, document).get(0);
    }

    public void insert(String collectionName, Document document) {
        getCollection(collectionName).insertOne(document);
    }

    public void insert(String collectionName, List<Document> documentList) {
        getCollection(collectionName).insertMany(documentList);
    }

    public void delete(String collectionName, Document document) {
        getCollection(collectionName).deleteOne(document);
    }

    public void delete(String collectionName, List<Document> documentList) {
        for(Document d : documentList) {
            delete(collectionName, d);
        }
    }

    public void update(String collectionName, Document oldVersion, Document newVersion) {
        getCollection(collectionName).updateOne(oldVersion, newVersion);
    }
}