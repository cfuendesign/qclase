save:
	rm -r backup/src-BACKUP
	cp -r src/ backup/src-BACKUP/

build: save clean
	deno compile --allow-net --target x86_64-unknown-linux-gnu --output bin/linux64/qclase src/main.ts
	deno compile --allow-net --target x86_64-pc-windows-msvc --output bin/win64/qclase src/main.ts
	deno compile --allow-net --target x86_64-apple-darwin --output bin/mac64/qclase src/main.ts
	deno compile --allow-net --target aarch64-apple-darwin --output bin/macARM/qclase src/main.ts

clean:
	-rm bin/linux64/*
	-rm bin/win64/*
	-rm bin/mac64/*
	-rm bin/macARM/*
