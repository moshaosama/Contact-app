package com.example.demo.Contact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/createContact")
    public Contact createContact(@RequestBody Contact contact) {
        return this.ContactService.createContact(contact);
    }

    @GetMapping("/Contacts")
    public List<Contact> getContact() {
        return this.ContactService.getContact();
    }

    @DeleteMapping("/deleteContact/{contactId}")
    public void deleteContact(@PathVariable("contactId") Integer id) {
        this.ContactService.deleteContact(id);
    }
}