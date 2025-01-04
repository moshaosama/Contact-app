package com.example.demo.Contact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactController {
    private final ContactService ContactService;

    @Autowired
    ContactController(ContactService ContactService) {
        this.ContactService = ContactService;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/createContact")
    public Contact createContact(@RequestBody Contact contact) {
        return this.ContactService.createContact(contact);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/Contacts")
    public List<Contact> getContact() {
        return this.ContactService.getContact();
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/deleteContact/{contactId}")
    public void deleteContact(@PathVariable("contactId") Integer id) {
        this.ContactService.deleteContact(id);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("Contact/{contact_id}")
    public Contact getContactById(@PathVariable("contact_id") Integer id) {
        return this.ContactService.getContactById(id);
    }
}