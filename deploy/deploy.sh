#!/bin/bash
set -e

# 用法：./deploy/deploy.sh user@your-ecs-ip
# 示例：./deploy/deploy.sh root@123.45.67.89

HOST="${1:-}"
REMOTE_PATH="/var/www/elinweb"
LOCAL_DIST="./dist"

if [ -z "$HOST" ]; then
    echo "用法: $0 user@host"
    echo "示例: $0 root@123.45.67.89"
    exit 1
fi

if [ ! -d "$LOCAL_DIST" ]; then
    echo "错误：找不到 $LOCAL_DIST 目录，请先运行 npm run build"
    exit 1
fi

if ! command -v rsync &> /dev/null; then
    echo "本地未安装 rsync，尝试使用 scp..."
    scp -r "$LOCAL_DIST"/* "$HOST:$REMOTE_PATH/"
else
    echo "使用 rsync 部署到 $HOST:$REMOTE_PATH ..."
    rsync -avz --delete \
        --exclude="*.map" \
        "$LOCAL_DIST/" "$HOST:$REMOTE_PATH/"
fi

echo "部署完成：$HOST:$REMOTE_PATH"
echo "如需重载 Nginx，请在服务器上执行：sudo systemctl reload nginx"
