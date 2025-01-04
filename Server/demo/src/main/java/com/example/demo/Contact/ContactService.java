package com.example.demo.Contact;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private final ContactRepository ContactRepository;

    @Autowired
    ContactService(ContactRepository ContactRepository) {
        this.ContactRepository = ContactRepository;
    }

    public Contact createContact(Contact contact) {
        return this.ContactRepository.save(contact);
    }

    public List<Contact> getContact() {
        return this.ContactRepository.findAll();
    }

    public void deleteContact(Integer id) {
        ContactRepository.deleteById(id);
    }

    public Contact getContactById(Integer id) {
        return this.ContactRepository.findById(id).orElse(new Contact());
    }

}