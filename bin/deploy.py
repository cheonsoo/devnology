import os
import datetime

now = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

print(f"[STARTED] Starting deployment at {now}")

app_root="/Users/cheonsoo.park/Workspace/chance/devnology"
s3_bucket="s3://blog.devnology.co.kr"

print("====================================================================================================")
print("Building devnology")
print("====================================================================================================")
os.system("yarn build")

print("====================================================================================================")
print(f"Backing up previous version to {s3_bucket}/bak/{now}")
print("====================================================================================================")
# aws s3 mv --recursive --exclude "bak/*" s3://static.devnology.com/ s3://static.devnology.com/bak/20211215-025900 --profile chance
os.system(f"aws s3 mv --recursive --exclude \"bak/*\" {s3_bucket}/ {s3_bucket}/bak/{now}/ --profile chance")

print("====================================================================================================")
print(f"Deploying new version from {app_root}/dist to {s3_bucket}/ --profile chance")
print("====================================================================================================")
os.system(f"aws s3 sync {app_root}/dist/ {s3_bucket}/ --profile chance")

end = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
print(f"[FINISHED] Deployment Finished at {end}")
