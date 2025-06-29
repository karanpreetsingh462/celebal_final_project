#!/bin/bash

echo "🚀 Starting Celebal Pharma Application with Docker..."

# Stop and remove existing containers
echo "🧹 Cleaning up existing containers..."
docker-compose down -v

# Remove existing images to ensure fresh build
echo "🗑️  Removing existing images..."
docker-compose down --rmi all

# Build and start all services
echo "🔨 Building and starting services..."
docker-compose up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Check service status
echo "📊 Checking service status..."
docker-compose ps

echo ""
echo "✅ Application is starting up!"
echo "🌐 Frontend: http://localhost"
echo "🔧 Backend API: http://localhost:8080"
echo "🗄️  Database: localhost:3306"
echo ""
echo "📋 To view logs: docker-compose logs -f"
echo "🛑 To stop: docker-compose down" 