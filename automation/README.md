# ConvoTrack# MeetFlow AI Automation Module

## Purpose

This module handles automated task notifications,
deadline checking, and meeting follow-ups.

## Features

1. Meeting payload validation
2. Task notification formatting
3. Deadline checking
4. Duplicate notification prevention
5. Email templates

## Technologies

- JavaScript
- Node.js
- n8n (future integration)
- FastAPI
- Supabase

## Folder Structure

scripts/
- validate_payload.js
- format_notification.js
- deadline_checker.js
- duplicate_checker.js

templates/
- task_notification.html
- deadline_reminder.html
- meeting_followup.html

## Future Integration

The module will connect with n8n through
authenticated webhooks and backend APIs.