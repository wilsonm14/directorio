pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh '''
                docker pull wilsonmz/users-service
                docker pull wilsonmz/business-service
                docker pull wilsonmz/orders-service
                docker pull wilsonmz/search-service
                docker pull wilsonmz/gateway

                docker run -d -p 3001:3000 wilsonmz/users-service
                docker run -d -p 3002:3000 wilsonmz/business-service
                docker run -d -p 3003:3000 wilsonmz/orders-service
                docker run -d -p 3004:3000 wilsonmz/search-service
                docker run -d -p 3000:3000 wilsonmz/gateway
                '''
            }
        }
    }
}
