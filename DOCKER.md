# Docker Setup for Event Navigation App

This guide explains how to run the Event Navigation App using Docker.

## Prerequisites

- Docker Desktop installed on your machine
- Docker Compose (usually included with Docker Desktop)

## Quick Start

### Production Build

1. **Build and run the production container:**

   ```bash
   docker-compose up --build
   ```

2. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

### Development Build

1. **Run the development container:**

   ```bash
   docker-compose --profile dev up --build
   ```

2. **Access the development server:**
   Open your browser and navigate to `http://localhost:3001`

## Docker Commands

### Building the Images

#### Production Image

```bash
docker build -t event-navigation-app .
```

#### Development Image

```bash
docker build -f Dockerfile.dev -t event-navigation-app:dev .
```

### Running Containers

#### Production Container

```bash
docker run -p 3000:3000 event-navigation-app
```

#### Development Container

```bash
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules event-navigation-app:dev
```

### Docker Compose Commands

#### Start services

```bash
docker-compose up
```

#### Start services in background

```bash
docker-compose up -d
```

#### Stop services

```bash
docker-compose down
```

#### View logs

```bash
docker-compose logs -f
```

#### Rebuild and start

```bash
docker-compose up --build
```

## Environment Variables

You can create a `.env.local` file in the root directory to set environment variables:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_APP_ENV=production
```

## Docker Images Structure

### Production Image (`Dockerfile`)

- Multi-stage build for optimized image size
- Uses Next.js standalone output
- Runs as non-root user for security
- Production-optimized with minimal dependencies

### Development Image (`Dockerfile.dev`)

- Includes all development dependencies
- Supports hot reloading
- Mounts source code as volume for live updates

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can change the port mapping:

```bash
docker-compose up --build -e PORT=3001
```

### Permission Issues

If you encounter permission issues, ensure Docker has proper permissions:

```bash
sudo docker-compose up --build
```

### Clean Build

To clean build cache and start fresh:

```bash
docker-compose down
docker system prune -a
docker-compose up --build
```

### View Container Logs

```bash
docker-compose logs event-navigation-app
```

## Production Deployment

For production deployment, you can:

1. **Push to a container registry:**

   ```bash
   docker tag event-navigation-app your-registry/event-navigation-app:latest
   docker push your-registry/event-navigation-app:latest
   ```

2. **Deploy using the production image:**
   ```bash
   docker run -p 80:3000 your-registry/event-navigation-app:latest
   ```

## Notes

- The production build uses Next.js standalone output for optimal performance
- Hot reloading is available in development mode
- Static assets are properly cached in the production build
- The container runs as a non-root user for security
